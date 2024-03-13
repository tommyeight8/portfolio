
  export const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: .4,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      }
    },
    exit: {
      y: '-100vh',
      opacity: 1
    }
  }