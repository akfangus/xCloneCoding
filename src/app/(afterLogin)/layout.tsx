import React from 'react';

export default function AfterLogin({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <p>afterLogin 레이아웃 이건 페이지 라우팅되도 리렌더링이 안되요</p>
            {children}
        </div>
    );
}
