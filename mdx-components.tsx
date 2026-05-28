import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <div className="mb-5">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8C8A82]">
            {children}
          </span>
          <div className="flex-1 h-px bg-black/8" />
        </div>
      </div>
    ),
    h2: ({ children }) => (
      <h2 className="text-[clamp(24px,3.5vw,38px)] font-bold tracking-[-1.5px] mb-5">
        {children}
      </h2>
    ),
    p: ({ children }) => {
      if (typeof children === 'object' && (children as any)?.type === 'img') {
        return <>{children}</>
      }
      return (
        <p className="text-[15px] leading-[1.8] max-w-[640px] mb-4">
          {children}
        </p>
      )
    },
    img: ({ src, alt }) => (
      <div className="rounded-2xl overflow-hidden my-12">
        <img src={src} alt={alt} className="w-full object-cover" />
      </div>
    ),
  }
}