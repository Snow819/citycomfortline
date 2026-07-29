// composable — call once per page to set the browser <title>
import { onMounted } from 'vue'

export function usePageTitle(title) {
    onMounted(() => {
        document.title = title
    })
}