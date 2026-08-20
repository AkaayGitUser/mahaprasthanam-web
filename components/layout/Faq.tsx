export default function Faq() {
	const faqs = [
		{
			question: "1. What is Vaikunta Mahaprasthanam?",
			answer: "Vaikunta Mahaprasthanam is a dedicated cremation and final rites facility designed to provide families with a dignified, peaceful and well managed environment during a difficult time.",
		},
		{
			question: "2. How can I book a cremation service?",
			answer: "You can book a service through the Book Now option on the website by selecting the preferred location, date, time slot and required services.",
		},
		{
			question: "3. Can I choose a specific time slot?",
			answer: "Yes. Families can select an available time slot while making the booking, subject to availability at the chosen facility.",
		},
		{
			question: "4. Are traditional religious rituals available?",
			answer: "Yes. Traditional funeral rites and rituals can be conducted, with arrangements available based on the family's customs and requirements.",
		},
       
         {
            question: "5. What is the cancellation policy?",
            answer: "Cancellations can be made up to 24 hours before the scheduled service, subject to the terms and conditions of the booking."
        },
	];

	return (
		<section
			aria-labelledby="faq-heading"
			className="bg-white px-4 pb-16 pt-2 text-[#171717] sm:px-8 lg:px-10"
		>
			<h2 id="faq-heading" className="text-center text-3xl font-semibold text-[#F58220]">
				FAQ&apos;S
			</h2>
			<div className="mx-auto mt-5 max-w-4xl">
				{faqs.map((faq) => (
					<details key={faq.question} className="group border-b border-[#dcd9e8] py-2 sm:py-3">
						<summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-plus-jakarta text-lg font-normal marker:hidden sm:text-xl [&::-webkit-details-marker]:hidden">
							{faq.question}
							<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F58220] text-white transition-transform duration-300 hover:text-white group-open:rotate-180">
								<svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
									<path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
								</svg>
							</span>
						</summary>
						<p className="max-w-3xl pt-1 font-plus-jakarta text-base leading-7 text-gray-600">{faq.answer}</p>
					</details>
				))}
			</div>
		</section>
	);
}
