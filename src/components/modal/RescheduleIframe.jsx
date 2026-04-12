function RescheduleIframe({ calUsername, eventSlug, rescheduleUid }) {
	const src = `https://cal.com/${calUsername}/${eventSlug}?rescheduleUid=${rescheduleUid}&hideEventTypeDetails=true&theme=light`

	return (
		<iframe
			src={src}
			width='100%'
			height='480px'
			frameBorder='0'
			style={{ border: 'none', borderRadius: '5px' }}
		/>
	)
}

export default RescheduleIframe
