'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface RevealProps {
    children: React.ReactNode;
    className?: string;
    /** Delay in ms before starting the transition once in view */
    delayMs?: number;
    /** Direction the element should come from */
    from?: RevealDirection;
    /** Only animate once (do not hide again when leaving viewport) */
    once?: boolean;
    /** Optional threshold for IntersectionObserver */
    threshold?: number;
}

/**
 * Reveal: Wraps content and animates it into view on scroll using IntersectionObserver.
 */
export default function Reveal({
    children,
    className,
    delayMs = 0,
    from = 'up',
    once = true,
    threshold = 0.15,
}: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Start animation
                        window.setTimeout(() => setIsVisible(true), delayMs);
                        if (once) observer.unobserve(entry.target);
                    } else if (!once) {
                        setIsVisible(false);
                    }
                });
            },
            { threshold }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [delayMs, once, threshold]);

    const transformClass = (() => {
        switch (from) {
            case 'up':
                return isVisible ? 'translate-y-0' : 'translate-y-6';
            case 'down':
                return isVisible ? 'translate-y-0' : '-translate-y-6';
            case 'left':
                return isVisible ? 'translate-x-0' : 'translate-x-6';
            case 'right':
                return isVisible ? 'translate-x-0' : '-translate-x-6';
            case 'none':
            default:
                return 'translate-y-0';
        }
    })();

    return (
        <div
            ref={ref}
            className={cn(
                'will-change-transform transition-all duration-700 ease-out',
                isVisible ? 'opacity-100' : 'opacity-0',
                transformClass,
                className
            )}
        >
            {children}
        </div>
    );
}


