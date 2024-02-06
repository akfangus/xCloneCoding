import Image from 'next/image';
import Link from 'next/link';
import zlogo from '/public/xlogo.png';

export default function Main() {
    return (
        <main className="flex items-center justify-center w-full h-screen gap-8">
            <div className="flex items-center justify-center flex-1 item">
                <Image src={zlogo} alt="logo" width={300} height={300} />
            </div>
            <div className="flex flex-col justify-center flex-1 pr-10">
                <h1 className="my-10 text-6xl font-bold">지금 일어나고 있는 일</h1>
                <h2 className="mb-8 text-4xl font-bold">지금 가입하세요.</h2>
                <Link
                    href="/i/flow/signup"
                    className="flex items-center justify-center h-10 px-4 text-sm text-white bg-blue-500 border-0 rounded-full hover:bg-blue-600 w-75"
                >
                    계정 만들기
                </Link>
                <h3 className="mt-10 mb-5 text-2xl font-bold">이미 트위터에 가입 하셨나요?</h3>
                <Link
                    href="/login"
                    className="flex items-center justify-center h-10 px-4 text-sm text-blue-500 border border-gray-300 rounded-full w-75 hover:bg-blue-50"
                >
                    로그인
                </Link>
            </div>
        </main>
    );
}
