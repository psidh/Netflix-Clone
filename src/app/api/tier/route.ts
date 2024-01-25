import User from '@/models/userModel';
import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromTokens';

connect();

export async function POST(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);
    console.log(userID);
    
    const user = await User.findById({ _id: userID });
    console.log(user);
    

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 400 });
    }

    const response = await request.json();
    console.log(response);
    
    const tier = response.tier;

    if (!response || !tier) {
      return NextResponse.json({ message: 'Tier not found' }, { status: 400 });
    }

    user.tier = tier;
    await user.save();
    return NextResponse.json({ message: 'Tier saved' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
