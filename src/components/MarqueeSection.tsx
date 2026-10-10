const cap = `${import.meta.env.BASE_URL}assets/cap.png`

const items = [
  'Education & University',
  'Online Education',
  'Flexible Class Batches',
  'Experience Instructors',
  'Kindergarten Study',
  '25% Coupon Bonus',
  '25% Extra Coupon Bonus',
  'Education & University',
  'Online Education',
  'Flexible Class Batches',
  'Experience Instructors',
  'Kindergarten Study',
  '25% Coupon Bonus',
  '25% Extra Coupon Bonus',
]

export default function MarqueeSection() {
  return (
    <div
      className="py-4 overflow-hidden"
      style={{ backgroundColor: 'var(--primary)' }}
    >
      <div className="marquee-track flex">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-5 text-white font-semibold text-sm whitespace-nowrap">
            <img
              src={cap}
              alt="Cap Icon"
              className="w-5 h-5 object-contain shrink-0"
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
