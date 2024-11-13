  import { useEffect, useState } from "react"

  export const tailwindBreakpoints = {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)"
  } as const

  export function useMediaQuery(query: string | keyof typeof tailwindBreakpoints) {

    const queryString = typeof query === "string" && query in tailwindBreakpoints 
      ? tailwindBreakpoints[query as keyof typeof tailwindBreakpoints]
      : query

    const [value, setValue] = useState(false)

    useEffect(() => {
      function onChange(event: MediaQueryListEvent) {
        setValue(event.matches)
      }

      const result = matchMedia(queryString)
      result.addEventListener("change", onChange)
      setValue(result.matches)

      return () => result.removeEventListener("change", onChange)
    }, [queryString])

    return value
  }