import List from "../List"
import Button from "../Button"
import { useState } from "react"
import TeamFullPage from "./TeamFullPage"



function Team() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="team" data-color="white" className='team section font-[SansitaReg] py-20'>
      <div className="head1">
        <h1 className="text-5xl sm:text-6xl text-center tracking-tight">
          Our Team
        </h1>
      </div>
      <div className="list mt-10 w-full px-8">
        {/* //single list */}
        <List />
        <div className='flex items-center justify-center py-20'>
          <div onClick={() => setShowModal(true)}>
            <Button bgColor="bg-[#fef3dc]" text="VIEW ALL TEAM MEMBERS" />
          </div>
        </div>
      </div>
      {showModal && <TeamFullPage onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default Team
