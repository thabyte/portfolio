import { useState } from 'react';

// TODO: create a free form endpoint at https://formspree.io and paste the ID.
// Until then the form falls back to opening the visitor's mail client.
const FORMSPREE_ID = ''; // e.g. "xyzabcd"

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No endpoint configured yet -> graceful mailto fallback.
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name') ?? ''}`);
      const body = encodeURIComponent(`${data.get('message') ?? ''}\n\n— ${data.get('email') ?? ''}`);
      window.location.href = `mailto:muthomititus@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <p className="rounded-lg border border-[var(--color-line)] bg-[var(--color-paper-soft)] px-4 py-6 text-center text-sm">
        Thanks — I'll get back to you soon.
      </p>
    );
  }

  const field =
    'w-full rounded-md border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-2 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-mute)] focus:border-[var(--color-accent)] focus:outline-none';

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" required placeholder="Name" className={field} aria-label="Name" />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className={field}
          aria-label="Email"
        />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="What would you like to talk about?"
        className={field}
        aria-label="Message"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-md bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-[var(--color-paper)] transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong — email me directly instead.</p>
      )}
    </form>
  );
}
