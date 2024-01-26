import  {connect} from "@/dbConfig/dbConfig"
import { NextResponse, NextRequest } from 'next/server'
import Movie from '@/models/movieModel'

connect();

export async function GET(request: NextRequest){
  try{
    const search = request.json();
    const movies = await Movie.find({title: {$regex: search, $options: "i"}})
    return NextResponse.json(movies)
  }catch(error: any){
    return NextResponse.json({error: error.message}, {status: 500})
  }
}