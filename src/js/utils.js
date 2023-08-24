export function appendFineAnt() {
	const script = document.createElement('script')
	script.src = 'https://www.fireant.vn/Scripts/web/widgets.js'
	script.defer = true
	script.onload = () => {
		new FireAnt.QuoteWidget({
			container_id: 'fan-quote-373',
			symbols: 'IJC',
			locale: 'vi',
			price_line_color: '#71BDDF',
			grid_color: '#999999',
			label_color: '#999999',
			width: '100%',
			height: '200px',
		})
	}
	document.querySelector('.iframe-fineant').appendChild(script)
	console.log('🟢 Fineant is added!')
}
function processAjax(url, nodeElement) {
	$.ajax({
		url: url,
		beforeSend: function (data) {
			$('.loading').addClass('active')
		},
		success: async function (data) {
			const isItemEnd = $(data).find('.button-load-more').attr('href')
			$('.ajaxResponse').append($(data).find('.ajaxResponse').html())
			console.log(!isItemEnd)
			if (!isItemEnd) {
				$('.button-load-more').remove()
			}
			$('.loading').removeClass('active')
			// observer.observe()
		},
	})
}
export function clickLoadMoreAjax () {
	const $button = $('.button-load-more')
	const $response = $('.ajaxResponse')
	const $loading = $('.loading')
	const $next = $('.NextPage')
	const $back = $('.BackPage')
	if ($button.length) {
		$('.pagination').hide()
	}
	$button.on('click', function (e) {
		e.preventDefault()
		let value = $(this).attr('href')
		processAjax(value)
		return false
	})
}
