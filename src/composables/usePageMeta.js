// composable — call once per page to set <title>, meta description, keywords, and social tags
import { onMounted } from 'vue'

function setMetaTag(selector, attr, content) {
  let tag = document.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    const [, key, value] = selector.match(/\[(\w+)="([^"]+)"\]/)
    tag.setAttribute(key, value)
    document.head.appendChild(tag)
  }
  tag.setAttribute(attr, content)
}

export function usePageMeta({ title, description, keywords, ogTitle, ogDescription, twitterTitle, twitterDescription }) {
  onMounted(() => {
    if (title) document.title = title
    if (description) setMetaTag('meta[name="description"]', 'content', description)
    if (keywords) setMetaTag('meta[name="keywords"]', 'content', keywords)
    if (ogTitle) setMetaTag('meta[property="og:title"]', 'content', ogTitle)
    if (ogDescription) setMetaTag('meta[property="og:description"]', 'content', ogDescription)
    if (twitterTitle) setMetaTag('meta[name="twitter:title"]', 'content', twitterTitle)
    if (twitterDescription) setMetaTag('meta[name="twitter:description"]', 'content', twitterDescription)
  })
}
