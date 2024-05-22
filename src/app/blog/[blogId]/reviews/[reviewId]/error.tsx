"use client";
import "../../../../style.css";
export default function ErrorBoundary({
    error,
    reset,
    }:{
        error:Error;
        reset: () => void;
    }){
    return (
        <div>
            <div className="alert alert-danger">{error.message}
            <button className="bg-teal-500 text-white hover:bg-teal-600 px-2 py-1 rounded m-4" onClick={reset}>try again</button>
            </div>
        </div>
    );
    
    
}