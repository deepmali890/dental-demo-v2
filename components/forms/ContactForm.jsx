'use client'

import Select from 'react-select'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { useState } from 'react'

const initialState = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  service: null,
  doctor: null,
  message: '',
  consent: false,
}

export default function ContactForm({
  services,
  doctors,
  slots,
  successMessage,
}) {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: '12px',
      borderColor: state.isFocused ? '#2563eb' : '#e5e7eb',
      boxShadow: 'none',
      padding: '2px 4px',
      '&:hover': { borderColor: '#d1d5db' },
      minHeight: '44px',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#f1f5f9' : 'white',
      color: '#111827',
      fontSize: '14px',
    }),
    placeholder: (base) => ({
      ...base,
      color: '#9ca3af',
      fontSize: '14px',
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '12px',
      overflow: 'hidden',
    }),
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Enter valid mobile number'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = 'Enter valid email'
    if (!form.service) e.service = 'Please select a service'
    if (!form.consent) e.consent = 'Please give your consent'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) return setErrors(errs)

    setLoading(true)
    setErrors({})

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          service: form.service?.value,
          doctor: form.doctor?.value,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed");
      }

      setSuccess(true);
      setForm(initialState);

    } catch (err) {
      console.error(err);
      setErrors({ form: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((f) => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  // ✅ OPTIONS
  const serviceOptions = [
    ...(services?.map((s) => ({
      value: s.title,
      label: `${s.icon || '🦷'} ${s.title}`,
    })) || []),
    { value: 'General Checkup', label: '🔍 General Checkup / Not Sure' },
  ]

  const doctorOptions =
    doctors?.map((d) => ({
      value: d.name,
      label: `${d.name} — ${d.designation}`,
    })) || []

  // ✅ SUCCESS UI
  if (success) {
    return (
      <div className="flex flex-col items-center text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="text-green-600" size={32} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          Appointment Request Sent!
        </h3>
        <p className="text-sm text-gray-500 mt-2 max-w-sm">
          {successMessage ||
            'We will confirm your appointment shortly.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />
      </div>

      {/* Email */}
      <Input
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />

      {/* Service */}
      <Field label="Select Service" error={errors.service}>
        <Select
          options={serviceOptions}
          styles={selectStyles}
          value={form.service}
          onChange={(v) => setForm((f) => ({ ...f, service: v }))}
          placeholder="Choose treatment..."
        />
      </Field>

      {/* Doctor */}
      {doctorOptions.length > 0 && (
        <Field label="Preferred Doctor">
          <Select
            options={doctorOptions}
            styles={selectStyles}
            value={form.doctor}
            onChange={(v) => setForm((f) => ({ ...f, doctor: v }))}
            placeholder="No preference"
            isClearable
          />
        </Field>
      )}

      {/* Date + Time */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Input type="date" name="date" value={form.date} onChange={handleChange} label="Date" />
        <Input type="time" name="time" value={form.time} onChange={handleChange} label="Time" />
      </div>

      {/* Message */}
      <Field label="Notes">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="field resize-none"
          rows={3}
        />
      </Field>

      {/* Consent */}
      <label className="flex gap-3 text-sm text-gray-600">
        <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
        I agree to be contacted
      </label>

      {/* Submit */}
      <button
        disabled={loading}
        className="w-full bg-brand-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={16} />}
        {loading ? 'Sending...' : 'Book Appointment'}
      </button>

    </form>
  )
}

// 🔹 Reusable Components
function Input({ label, error, ...props }) {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <input {...props} className="field" />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

function Field({ label, children, error }) {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}