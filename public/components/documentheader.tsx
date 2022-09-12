import { useLocation } from 'preact-iso';
import { useEffect, useState } from 'preact/hooks';
import { Project } from '../classes/project';

export default function DocumentHeader() {
    return (
        <div class="document-header">
            <h1>문서 이름 <code>#cFKd</code></h1>
            <p style={{float:"left"}}>/일반 문서/템플릿</p>
            <p style={{float:"right"}}>#일반문서 #관리문서 #템플릿 #태그이름</p>
            <div style={{clear: "both"}}></div>
        </div>
    )
}