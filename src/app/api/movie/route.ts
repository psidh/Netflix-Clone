import { connect } from '@/dbConfig/dbConfig';
import Movie from '@/models/movieModel';
import { NextRequest, NextResponse } from 'next/server';

connect();


export async function GET(request: NextRequest) {
  try {
    const name = request.nextUrl.searchParams.get('name');
    
    const data = await Movie.findOne({title : name});
    

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}