import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Container } from '../components/layout/Section';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

const REGIONS = ['Africa', 'Europe', 'United States'];

const INTERESTS = [
  'Market Research',
  'Business Consulting',
  'AI Enterprise Solutions',
  'AI Training',
  'Life Sciences',
  'Not sure yet',
];

/* TODO: required-future config. The client has not supplied a submission
   endpoint. Until VITE_CONTACT_ENDPOINT is set the form hands off to the user's
   mail client rather than pretending to deliver a message it never sent. */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
const INBOX = 'info@mindcraftconsultancy.com';

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

const fieldCls =
  'mt-2 w-full min-h-[44px] rounded-edge border bg-[var(--color-ground-2)] px-4 py-3 text-body text-[var(--color-ink-strong)] transition-colors focus:outline-none';

const labelCls = 'font-display text-body-sm font-medium text-[var(--color-ink-2)]';

export const Contact: React.FC = () => {
  const { queryParams, navigate } = useNavigation();

  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    region: REGIONS[0],
    interest: INTERESTS[0],
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const scope = useMemo(
    () => [queryParams.industry, queryParams.geography, queryParams.capability].filter(Boolean),
    [queryParams]
  );

  useEffect(() => {
    if (queryParams.capability && INTERESTS.includes(queryParams.capability)) {
      setForm((p) => ({ ...p, interest: queryParams.capability }));
    }
  }, [queryParams]);

  const set = (k: keyof typeof form, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (k in errors) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    // Deliberately permissive: one @ with something either side. Stricter
    // patterns reject valid addresses and block real enquiries.
    if (!form.email.trim()) e.email = 'Please enter an email address so we can reply.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'That email address does not look complete.';
    if (!form.message.trim()) e.message = 'Please tell us what you are working on.';
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById(Object.keys(e)[0])?.focus();
      return;
    }

    const scopeLine = scope.length ? `\n\nScoped to: ${scope.join(' / ')}` : '';
    const body = `${form.message}${scopeLine}\n\n—\n${form.name}${
      form.organization ? `, ${form.organization}` : ''
    }\n${form.email}\nRegion: ${form.region}\nArea of interest: ${form.interest}`;

    if (ENDPOINT) {
      try {
        await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, scope }),
        });
        setSent(true);
        return;
      } catch {
        // Fall through to mail client rather than reporting a false success.
      }
    }
    window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(
      `Enquiry — ${form.interest}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const errCls = (k: keyof Errors) =>
    errors[k] ? 'border-[var(--color-error)]' : 'border-[var(--color-line-2)] focus:border-[var(--color-accent)]';

  // Back to the explorer with the same three choices, so the scope can be adjusted.
  const adjustScope = () => {
    const p = new URLSearchParams();
    (['industry', 'geography', 'capability'] as const).forEach((k) => {
      if (queryParams[k]) p.set(k, queryParams[k]);
    });
    navigate(`/explore?${p.toString()}`);
  };

  return (
    <div>
      {/* One fold: the claim and the facts on the left, the form on the right. */}
      <section className="pb-[var(--band)] pt-[var(--band-tight)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h1 className="rise text-h1">Start a conversation.</h1>
              <p
                className="rise measure mt-7 text-lead text-[var(--color-ink-2)]"
                style={{ animationDelay: '80ms' }}
              >
                Tell us the decision you are facing. If we are not the right partner for it, we will
                say so and point you somewhere better.
              </p>

              <motion.dl
                className="mt-10 border-t border-[var(--color-line-2)] lg:mt-14"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerChildren(0.08)}
              >
                {[
                  ['Headquarters', 'Nairobi, Kenya'],
                  ['Email', INBOX],
                  ['Regions served', 'Africa · Europe · United States'],
                ].map(([k, v]) => (
                  <motion.div
                    key={k}
                    variants={fadeUp}
                    className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-[var(--color-line)] py-5 sm:grid-cols-[minmax(0,10rem)_1fr] sm:items-baseline"
                  >
                    <dt className="font-display text-body-sm font-medium text-[var(--color-ink-3)]">{k}</dt>
                    <dd className="text-h5 text-[var(--color-ink-strong)] [overflow-wrap:anywhere]">
                      {k === 'Email' ? (
                        <a
                          href={`mailto:${INBOX}`}
                          className="text-[var(--color-accent)] underline decoration-[var(--color-accent-deep)] underline-offset-[6px] transition-colors hover:text-[var(--color-accent-2)] hover:decoration-[var(--color-accent)]"
                        >
                          {v}
                        </a>
                      ) : (
                        v
                      )}
                    </dd>
                  </motion.div>
                ))}
              </motion.dl>
              <p className="measure mt-5 text-body-sm text-[var(--color-ink-3)]">
                Nairobi is our only office. Everywhere else we work through in-country research
                associates.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-[var(--color-line)] border-t-[var(--color-accent-deep)] bg-[var(--color-raised)] p-6 sm:p-8 lg:p-10">
                {scope.length > 0 && (
                  <motion.div
                    className="mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 rounded-edge border border-[var(--color-accent-deep)] bg-[var(--color-ground-2)] px-5 py-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                  >
                    <p className="py-2 text-body-sm text-[var(--color-ink-2)]">
                      Scoped from the explorer:{' '}
                      <span className="text-[var(--color-ink-strong)]">{scope.join(' / ')}</span>
                    </p>
                    <button
                      type="button"
                      onClick={adjustScope}
                      className="group inline-flex min-h-[44px] cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent-2)] hover:text-[var(--color-ink-strong)]"
                    >
                      <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                      Adjust in the explorer
                    </button>
                  </motion.div>
                )}

                {sent ? (
                  <motion.div
                    aria-live="polite"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                  >
                    <h2 className="text-h3">Thank you.</h2>
                    <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
                      {ENDPOINT
                        ? 'Your message is with the Nairobi office. A member of the team will reply to you directly.'
                        : 'Your mail client should have opened with the message ready to send. If it did not, write to us directly at the address below.'}
                    </p>
                    <a
                      href={`mailto:${INBOX}`}
                      className="mt-6 inline-block text-body text-[var(--color-accent)] underline decoration-[var(--color-accent-deep)] underline-offset-4 hover:decoration-[var(--color-accent)]"
                    >
                      {INBOX}
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} noValidate>
                    <motion.div
                      className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      variants={staggerChildren(0.06)}
                    >
                      <motion.div variants={fadeUp}>
                        <label htmlFor="name" className={labelCls}>
                          Name <span className="font-normal text-[var(--color-ink-3)]">(required)</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => set('name', e.target.value)}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          className={`${fieldCls} ${errCls('name')}`}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-2 text-caption text-[var(--color-error)]">
                            {errors.name}
                          </p>
                        )}
                      </motion.div>

                      <motion.div variants={fadeUp}>
                        <label htmlFor="organization" className={labelCls}>
                          Organisation
                        </label>
                        <input
                          id="organization"
                          name="organization"
                          autoComplete="organization"
                          value={form.organization}
                          onChange={(e) => set('organization', e.target.value)}
                          className={`${fieldCls} border-[var(--color-line-2)] focus:border-[var(--color-accent)]`}
                        />
                      </motion.div>

                      <motion.div className="sm:col-span-2" variants={fadeUp}>
                        <label htmlFor="email" className={labelCls}>
                          Email <span className="font-normal text-[var(--color-ink-3)]">(required)</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => set('email', e.target.value)}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={`${fieldCls} ${errCls('email')}`}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-2 text-caption text-[var(--color-error)]">
                            {errors.email}
                          </p>
                        )}
                      </motion.div>

                      <motion.div variants={fadeUp}>
                        <label htmlFor="region" className={labelCls}>
                          Region
                        </label>
                        <select
                          id="region"
                          name="region"
                          value={form.region}
                          onChange={(e) => set('region', e.target.value)}
                          className={`${fieldCls} cursor-pointer border-[var(--color-line-2)] focus:border-[var(--color-accent)]`}
                        >
                          {REGIONS.map((r) => (
                            <option key={r} value={r} className="bg-[var(--color-surface)]">
                              {r}
                            </option>
                          ))}
                        </select>
                      </motion.div>

                      <motion.div variants={fadeUp}>
                        <label htmlFor="interest" className={labelCls}>
                          Area of interest
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={form.interest}
                          onChange={(e) => set('interest', e.target.value)}
                          className={`${fieldCls} cursor-pointer border-[var(--color-line-2)] focus:border-[var(--color-accent)]`}
                        >
                          {INTERESTS.map((i) => (
                            <option key={i} value={i} className="bg-[var(--color-surface)]">
                              {i}
                            </option>
                          ))}
                        </select>
                      </motion.div>

                      <motion.div className="sm:col-span-2" variants={fadeUp}>
                        <label htmlFor="message" className={labelCls}>
                          What are you working on?{' '}
                          <span className="font-normal text-[var(--color-ink-3)]">(required)</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={(e) => set('message', e.target.value)}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          className={`${fieldCls} resize-y ${errCls('message')}`}
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-2 text-caption text-[var(--color-error)]">
                            {errors.message}
                          </p>
                        )}
                      </motion.div>
                    </motion.div>

                    <div className="mt-8 flex flex-col gap-4 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-caption text-[var(--color-ink-3)]">
                        {ENDPOINT
                          ? 'Sent to the Nairobi office.'
                          : 'Opens your mail client with the message ready to send.'}
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex cursor-pointer items-center gap-2.5 self-start rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)] sm:self-auto"
                      >
                        Send
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
