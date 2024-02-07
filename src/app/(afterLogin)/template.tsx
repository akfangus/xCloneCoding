import React from 'react';

export default function AfterLoginTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* <p>template 페이지 라우팅이 될때마다 리렌더링이 됩니다.</p> */}
            {children}
        </div>
    );
}
