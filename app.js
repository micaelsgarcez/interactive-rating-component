window.onload = () => {
  const form = document.querySelector('form')
  form.onsubmit = (e) => {
    e.preventDefault()

    const rating = document.querySelector('input[name="rating"]:checked').value

    const contentRating = document.querySelector('.content-rating')
    const contentThank = document.querySelector('.content-thank')
    const badge = document.querySelector('.badge')
    badge.innerHTML = `You selected ${rating} out of 5`
    contentRating.classList.add('hidden')
    contentThank.classList.remove('hidden')
  }
}
