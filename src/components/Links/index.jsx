import React from 'react';
import { FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa';
export default function Links() {
    return (
        <div className="d-flex justify-content-center gap-4">
            <a
                href="https://facebook.com/eraasoft"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: '#1877f2',
                }}
            >
                <FaFacebookF size={22} />
            </a>
            <a
                href="https://wa.me/201068268354?text=Welcome%20ro%20Eraasoft"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: '#075e54',
                }}
            >
                <FaWhatsapp size={22} />
            </a>
            <a
                href="https://www.youtube.com/channel/UCFyfDR43YEbcD5EzDgDjmqQ/featured"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: '#ff0000',
                }}
            >
                <FaYoutube size={22} />
            </a>
        </div>
    );
}
