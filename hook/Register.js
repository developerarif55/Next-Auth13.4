import { create } from 'zustand'

const useregisterModal = create((set) => ({
  isOpen: true,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}))

export default useregisterModal