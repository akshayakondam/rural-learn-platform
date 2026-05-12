
/**
 * Video Cache Service
 * Handles downloading and caching of educational videos for offline use.
 * Uses the browser's Cache API.
 */

const CACHE_NAME = 'preschool-videos-v1';

export const videoCache = {
  /**
   * Checks if a video is already cached.
   * @param url The video URL
   * @returns The cached blob URL or null
   */
  async getCachedVideo(url: string): Promise<string | null> {
    try {
      const cache = await caches.open(CACHE_NAME);
      const response = await cache.match(url);
      if (response) {
        const blob = await response.blob();
        return URL.createObjectURL(blob);
      }
    } catch (error) {
      console.error('Error checking video cache:', error);
    }
    return null;
  },

  /**
   * Downloads and caches a video.
   * @param url The video URL
   * @returns The newly cached blob URL
   */
  async cacheVideo(url: string): Promise<string | null> {
    try {
      // Note: In a real browser environment, fetching YouTube URLs directly 
      // will fail due to CORS. This logic works for direct MP4 links.
      // For YouTube, we would typically use a backend service to get the stream.
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch video');
      
      const cache = await caches.open(CACHE_NAME);
      await cache.put(url, response.clone());
      
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error caching video:', error);
      return null;
    }
  },

  /**
   * Clears the video cache.
   */
  async clearCache(): Promise<void> {
    await caches.delete(CACHE_NAME);
  }
};
