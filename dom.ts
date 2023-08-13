const button = document.getElementById('presser')!

button?.addEventListener('click', function() {
    alert('hello')
})

// use type assestion
const stringer: unknown = 'hello'

const numChars = (stringer as string).length