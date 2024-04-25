import { connect } from '@/dbConfig/dbConfig';
import Movie from '@/models/movieModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request: NextRequest) {
  try {
    const data = await Movie.find();
    // console.log(data[0]['_id']);
    

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
