import { create } from 'zustand'

const useloginModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}))

export default useloginModal