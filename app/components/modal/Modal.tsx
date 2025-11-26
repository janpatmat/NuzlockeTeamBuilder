import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import CustomDropbox from './CustomDropbox';

const Modal = () => {
  return (
    <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>
                      This is an example of a dialog description.
                    </DialogDescription>
                  </DialogHeader>
                    <CustomDropbox />
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button>Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
    </div>
  )
}

export default Modal