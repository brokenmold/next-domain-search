import { useRouter } from 'next/router'
import Random from 'project-name-generator'

const searchDomain = async event => {
  const router = useRouter()
  // Prevent onClick Default
  event.preventDefault()

  // Format Search Term
  const searchTerm = term.value.toLowerCase().replace(/\s+/g, '')

  // Get Search Results
  router.push(`/domain/${searchTerm}`)
}

// Button > Random > onClick
const getRandom = async event => {
  // Prevent onClick Default
  event.preventDefault()

  // Query Random Term
  const rando = Random().spaced

  // Set Input Value
  document.getElementById('term').value = `${rando}`
}

// Form > onSubmit
const preventDefault = async event => {
  // Prevent onSubmit Default
  event.preventDefault()
}

export { searchDomain, getRandom, preventDefault }