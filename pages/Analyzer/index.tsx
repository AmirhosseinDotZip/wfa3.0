import { FC } from 'react'
import Navbar from '@/components/Navbar'
import Analyzer from '@/components/Analyzer'
import Socials from '@/components/Socials'


interface indexProps {

}

const index: FC<indexProps> = ({ }) => {
    return (
        <div className="flex h-screen flex-col items-center bg-center bg-cover" style={{ backgroundImage: bgURL }}>
            <Navbar />
            <Analyzer />
            <Socials />
        </div>
    )
}

export default index


const bgURL =
    "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=807')";
