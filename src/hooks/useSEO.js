import { useEffect } from 'react'

const setMeta = (selector, attribute, value) => {
  const tag = document.querySelector(selector)
  if (tag) {
    tag.setAttribute(attribute, value)
  }
}

export function useSEO({
  title,
  description,
  url = 'https://dhineshvn-portfolio.vercel.app',
  image = '/dhinesh.jpeg',
}) {
  useEffect(() => {
    document.title = title

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:image"]', 'content', image)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', image)
  }, [description, image, title, url])
}
