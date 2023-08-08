import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { GridPattern } from './GridPattern'

function Pattern({ mouseX, mouseY, ...gridProps }) {
    let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
    let style = { maskImage, WebkitMaskImage: maskImage }
  
    return (
      <div className="pointer-events-none">
        <div className="absolute -top-10 inset-0 rounded transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <GridPattern
            width={52}
            height={36}
            x="50%"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
            y={16}
            squares={[
                [0, 1],
                [1, 3],
            ]}
          />
        </div>
        <motion.div
          className="absolute inset-0 rounded bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
          style={style}
        />
        <motion.div
          className="absolute inset-0 rounded opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
          style={style}
        >
          <GridPattern
            width={52}
            height={36}
            x="50%"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
            squares={[
                [-1, 2],
                [1, 3],
            ]}
          />
        </motion.div>
      </div>
    )
  }
  

const Tile = ({ children }) => {
    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)
  
    function onMouseMove({ currentTarget, clientX, clientY }) {
      let { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    return (
        <div
            className="border border-gray-300 rounded p-4 group relative flex bg-zinc-50 transition-shadow dark:bg-white/2.5 dark:hover:shadow-black/5 overflow-hidden"
            onMouseMove={onMouseMove}
        >
            <Pattern mouseX={mouseX} mouseY={mouseY} />
            <div className="relative">
                {children}
            </div>
        </div>
    )
}


export default Tile