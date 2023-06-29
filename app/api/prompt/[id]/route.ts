import Prompt from '@/models/prompt';
import { connectToDB } from '@/utils/database';

export const GET = async (
  req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findOne({ _id: id }).populate('creator');
    if (!prompt)
      return new Response("Prompt doesn't exist!", {
        status: 404,
      });

    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response('Failed to get prompt', {
      status: 500,
    });
  }
};

export const PATCH = async (
  req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();

    const updatedPrompt = await Prompt.findOneAndUpdate(
      { _id: id },
      {
        prompt: prompt,
        tag: tag,
      }
    ).populate('creator');

    if (!updatedPrompt)
      return new Response('Post doesnt exist', {
        status: 404,
      });

    return new Response(JSON.stringify(updatedPrompt), {
      status: 200,
    });
  } catch (error) {
    return new Response('Failed to update post', {
      status: 500,
    });
  }
};

export const DELETE = async (
  req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndRemove(id);

    return new Response('Post deleted successfully!', {
      status: 200,
    });
  } catch (error) {
    return new Response('Failed to delete post!', {
      status: 500,
    });
  }
};
