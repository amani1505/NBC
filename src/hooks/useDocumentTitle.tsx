import { useEffect, useRef } from 'react'

export function useDocumentTitle(title:string) {
  const prevTitle = useRef(document.title)
  
  useEffect(() => {
    if (title && title !== document.title) {
      document.title = title
    }
  }, [title])
  
  useEffect(() => {
    // Cleanup on unmount
    return () => {
      document.title = prevTitle.current
    }
  }, [])
}