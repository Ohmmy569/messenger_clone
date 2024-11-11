import Image from 'next/image';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Chat_panel from './components/chat_panel';

export default function Home() {
  return (
    <>
      <div className="divide-y divide-slate-700">
        <Navbar />
        <div className="divide-x divide-slate-700 flex h-96">
          <Sidebar />
          <Chat_panel />
        </div>
        <div>your email :</div>
        <div>your name :</div>
      </div>
    </>
  );
}
