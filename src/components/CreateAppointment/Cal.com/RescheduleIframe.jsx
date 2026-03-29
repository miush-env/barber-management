export default function RescheduleIframe({
	calUsername,
	eventSlug,
	rescheduleUid,
}) {
	const src = `https://cal.com/${calUsername}/${eventSlug}?rescheduleUid=${rescheduleUid}`

	return (
		<iframe
			src={src}
			width='100%'
			height='800px'
			frameBorder='0'
			style={{ border: 'none' }}
		/>
	)
}
