import { connectToDB } from '@/utils/database';
import Prompt from '@/models/prompt';
import User from '@/models/user';

export const GET = async (
  req: Request,
  {
    params: { email },
  }: {
    params: {
      email: string;
    };
  }
) => {
  try {
    await connectToDB();
    console.log('from user dynamic route: ' + email);
    const user = await User.find({ email: email });
    console.log(user);

    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    return new Response('Failed to fetch posts', { status: 500 });
  }
};
