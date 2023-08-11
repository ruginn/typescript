const button = document.getElementById('presser') as HTMLElement

button?.addEventListener('click', function() {
    alert('hello')
})

// use type assestion
const stringer: unknown = 'hello'

const numChars = (stringer as string).length