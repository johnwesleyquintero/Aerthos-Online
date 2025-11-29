

/**
 * Detects if a URL is a Google Drive "View" link or a raw File ID and converts it to a "Direct" link.
 * 
 * OPTIMIZATION NOTE:
 * Uses the Google Drive Thumbnail API (`/thumbnail?id=...&sz=...`) instead of the Download API (`/uc?export=view`).
 * The Thumbnail API is significantly faster, bypasses virus scan warnings for large files, 
 * and avoids 403 Forbidden errors common with high-traffic direct download links.
 * 
 * Input (URL): https://drive.google.com/file/d/1bhts40yK9Evnuj8JkQnujXTDM-Mzmx1Q/view?usp=sharing
 * Input (ID):  1bhts40yK9Evnuj8JkQnujXTDM-Mzmx1Q
 * Output:      https://drive.google.com/thumbnail?id=1bhts40yK9Evnuj8JkQnujXTDM-Mzmx1Q&sz=w3840-h2160
 */
export const resolveGoogleDriveLink = (input: string | undefined): string => {
  if (!input) return '';
  
  let id = '';

  // 1. Check if it is a raw Google Drive ID (alphanumeric, hyphens, underscores)
  const isRawId = /^[a-zA-Z0-9_-]+$/.test(input);
  
  if (isRawId) {
    id = input;
  } 
  // 2. If it's a full URL, attempt to extract the ID
  else if (input.includes('drive.google.com')) {
    // Matches /d/FILE_ID/ or id=FILE_ID
    const idMatch = input.match(/\/d\/([a-zA-Z0-9_-]+)/) || input.match(/id=([a-zA-Z0-9_-]+)/);

    if (idMatch && idMatch[1]) {
      id = idMatch[1];
    }
  }

  // 3. If an ID was found, construct the high-res thumbnail link
  if (id) {
    // 'sz=w3840-h2160' requests a 4K resolution image, ensuring quality while retaining caching benefits.
    return `https://drive.google.com/thumbnail?id=${id}&sz=w3840-h2160`;
  }

  // 4. Return original if no processing needed (e.g. Unsplash link)
  return input;
};

/**
 * Resolves Google Drive links specifically for AUDIO streaming.
 * The thumbnail API doesn't work for MP3s, so we use the export=download endpoint.
 */
export const resolveGoogleDriveAudio = (input: string | undefined): string => {
    if (!input) return '';
    
    // PRIORITY: If it is a local path (starts with /), return immediately.
    if (input.startsWith('/')) {
        return input;
    }
    
    let id = '';
  
    // 1. Check if it is a raw Google Drive ID
    const isRawId = /^[a-zA-Z0-9_-]+$/.test(input);
    
    // CAUTION: Filenames like "music.mp3" might pass the ID regex if we aren't careful, 
    // but they usually have a dot. Our regex excludes dots.
    if (isRawId) {
      id = input;
    } 
    // 2. If it's a full URL, attempt to extract the ID
    else if (input.includes('drive.google.com')) {
      const idMatch = input.match(/\/d\/([a-zA-Z0-9_-]+)/) || input.match(/id=([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        id = idMatch[1];
      }
    }
  
    // 3. Construct the download link which works for audio tags
    if (id) {
      return `https://docs.google.com/uc?export=download&id=${id}`;
    }
  
    return input;
  };
