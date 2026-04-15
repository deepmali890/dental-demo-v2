export default function DoctorSocial({ doctor }) {
  if (!doctor.socialLinks?.linkedin) return null

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 max-w-3xl">

        <div className="rounded-2xl border border-gray-100 p-5 space-y-4">

          {/* Header */}
          <h3 className="text-sm font-semibold text-gray-900">
            Connect with Doctor
          </h3>

          {/* LinkedIn */}
          <a
            href={doctor.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
          >

            {/* Icon */}
            <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current text-gray-700"
              >
                <path d="M20.45 20.45h-3.6v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 
                0-2.16 1.46-2.16 2.96v5.66H9.23V9h3.46v1.56h.05c.48-.9 
                1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.52v6.23zM5.34 
                7.43a2.09 2.09 0 110-4.18 2.09 2.09 0 010 4.18zM7.14 
                20.45H3.54V9h3.6v11.45z"/>
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-sm text-gray-800 group-hover:text-gray-900">
                LinkedIn Profile
              </p>
              <p className="text-xs text-gray-500">
                View professional profile
              </p>
            </div>

          </a>

        </div>

      </div>
    </section>
  )
}