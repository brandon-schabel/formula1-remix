import { Form } from 'remix'
import type { MetaFunction } from 'remix'

export let meta: MetaFunction = () => {
  return {
    title: 'Lap Times',
  }
}

const DrawerContent = () => {
  return (
    <>
      <div id="search-modal" className="modal">
        <div className="modal-box bg-base-200">
          <div className="flex justify-center">
            <h1 className="text-2xl">F1 Lap Search</h1>
          </div>
          <Form method="post" action="/circuits/lap-times">
            <label className="label text-xl">
              Year
              <input className="input outlined" name="year" type="number" />
            </label>

            <label className="label text-xl">
              Round
              <input className="input" name="round" type="number" />
            </label>

            <label className="label text-xl">
              Lap - Optional
              <input className="input" name="lap" type="number" />
            </label>

            <label className="label text-xl">
              Driver - Optional
              <input className="input" name="driver" type="text" />
            </label>

            <div className="modal-action">
              <a href="#">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </a>
              <a href="#" className="btn">
                Close
              </a>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default function LapTimeSearch() {
  return (
    <>
      <div className="flex justify-center p-2 w-full">
        <a href="#search-modal" className="btn btn-primary">
          New Search
        </a>
      </div>
      <DrawerContent />
    </>
  )
}
