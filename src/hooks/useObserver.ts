import { useEffect } from "react"

interface useObserverProps {
    target: React.MutableRefObject<HTMLDivElement|null>,
    onIntersect: IntersectionObserverCallback,
    root: HTMLDivElement|null,
    rootMargin: string,
    threshold: number,
}

export const useObserver = ({target, onIntersect, root, rootMargin, threshold}: useObserverProps) => {
    useEffect(() => {
        let observer:IntersectionObserver|undefined = undefined
        if (target && target.current) {
            observer = new IntersectionObserver(onIntersect, { root, rootMargin, threshold })
            observer.observe(target.current)
        }

        // observer를 사용하는 컴포넌트가 해제되면 observer 역시 꺼 주자. 
        return () => observer && observer.disconnect()
    }, [target, rootMargin, threshold])
}