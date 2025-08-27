'use client';

import { Share2, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface SocialShareProps {
  title: string;
  excerpt: string;
  url: string;
  via?: string; // Twitter handle for attribution
}

export default function SocialShare({ title, excerpt, url, via = 'aiudalabs' }: SocialShareProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Encode the sharing content for URLs
  const encodedTitle = encodeURIComponent(title);
  const encodedExcerpt = encodeURIComponent(excerpt);
  const encodedUrl = encodeURIComponent(url);

  // Social sharing URLs
  const shareUrls = {
    // LinkedIn new sharing format - includes text in the share dialog
    linkedin: `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(`${title}\n\n${excerpt}\n\n${url}`)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=${via}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
  };

  const handleShare = (platform: string) => {
    const shareUrl = shareUrls[platform as keyof typeof shareUrls];
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
    }
    setShowShareMenu(false);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: excerpt,
          url,
        });
        setShowShareMenu(false);
      } catch (error) {
        console.log('Error sharing:', error);
        // Fallback to showing the share menu
        setShowShareMenu(!showShareMenu);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleNativeShare}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors bg-gray-50 hover:bg-blue-50 rounded-lg"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>

      {showShareMenu && (
        <div className="absolute top-12 left-0 z-10 min-w-[200px] bg-white rounded-lg shadow-lg border border-gray-200 py-2">
          <div className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wide">
            Share on
          </div>
          
          {/* LinkedIn */}
          <button
            onClick={() => handleShare('linkedin')}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            <div className="w-5 h-5 bg-[#0077B5] rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">in</span>
            </div>
            LinkedIn
          </button>

          {/* X (Twitter) */}
          <button
            onClick={() => handleShare('twitter')}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">𝕏</span>
            </div>
            X (Twitter)
          </button>

          {/* Facebook */}
          <button
            onClick={() => handleShare('facebook')}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            <div className="w-5 h-5 bg-[#1877F2] rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">f</span>
            </div>
            Facebook
          </button>

          {/* Copy Link */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(url);
              setShowShareMenu(false);
              // You could add a toast notification here
            }}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-100 mt-1 pt-3"
          >
            <MessageCircle className="w-5 h-5 text-gray-400" />
            Copy Link
          </button>
        </div>
      )}

      {/* Overlay to close menu */}
      {showShareMenu && (
        <div 
          className="fixed inset-0 z-[5]" 
          onClick={() => setShowShareMenu(false)}
        />
      )}
    </div>
  );
}