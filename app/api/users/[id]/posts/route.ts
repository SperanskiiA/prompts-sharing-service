import { connectToDB } from '@/utils/database';
import Prompt from '@/models/prompt';

export const GET = async (
  req: Request,
  {
    params: { id },
  }: {
    params: {
      id: string;
    };
  }
) => {
  try {
    await connectToDB();
    console.log('from user dynamic route: ' + id);
    const prompts = await Prompt.find({ creator: id }).populate('creator');

    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response('Failed to fetch posts', { status: 500 });
  }
};
