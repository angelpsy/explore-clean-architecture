import { PostRepositoryRealtime } from '@/../infrastructure/repositories/post-repository-realtime';

const instance = PostRepositoryRealtime.getInstance();
PostRepositoryRealtime.addDefaultPost([
  {
    id: 'b3fdac203c3',
    createdAt: '2023-05-25T09:30:51.289Z',
    updatedAt: '2023-05-25T09:30:51.289Z',
    title: '10 Surprising Benefits of Meditation for Your Mental Health',
    excerpt:
      "One unexpected benefit of meditation is its ability to improve your creativity and boost your problem-solving skills. Studies have shown that regular meditation practice can increase activity in the prefrontal cortex, which is responsible for higher-level thinking, decision making, and creativity. By clearing your mind of clutter and distractions, meditation can help you tap into your inner wisdom and find innovative solutions to complex problems. So if you're looking to supercharge your creativity, adding meditation to your daily routine might be just what you need.",
    content:
      "<ul>\n      <li>Coding is a highly sought-after skill in the job market</li>\n      <li>Coding teaches problem-solving and critical thinking</li>\n      <li>Coding can lead to the development of innovative solutions</li>\n      <li>Coding is a gateway to tech entrepreneurship</li>\n      <li>Coding is a lifelong learning opportunity</li>\n    </ul>\n    <p>So if you haven't already, consider learning how to code today!</p>",
  },
]);

export const getPostRepositoryRealtimeInstance = (): PostRepositoryRealtime => {
  return PostRepositoryRealtime.getInstance();
};
