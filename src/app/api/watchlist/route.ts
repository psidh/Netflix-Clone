import { connect } from '@/dbConfig/dbConfig';
import { getDataFromToken } from '@/helpers/getDataFromTokens';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
import Movie from '@/models/movieModel';
connect();

export async function GET(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);

    if (userID) {
      const user = await User.findById(userID);
      if (user) {
        const allWatchList = user.watchlist;
        return NextResponse.json(allWatchList, { status: 200 });
      } else {
        return NextResponse.json(
          { message: 'User not found' },
          { status: 404 }
        );
      }
    } else {
      return NextResponse.json(
        { message: 'Session Expired, Login Again' },
        { status: 404 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);

    if (userID) {
      const reqBody = await request.json();

      console.log(reqBody);

      const MovieID = reqBody._id;
      const user = await User.findOne({ _id: userID });
      const movie = await Movie.findOne({ _id: MovieID });

      console.log(MovieID);

      if (user && movie) {
        if (user.watchlist.includes(movie)) {
          console.log('true true true');

          return NextResponse.json(
            { message: 'Movie already in watchlist' },
            { status: 409 } // 409 Conflict is often used to indicate that the request could not be completed due to a conflict with the current state of the target resource
          );
        }

        user.favourites.push(movie);
        await user.save();
        return NextResponse.json(
          { message: 'Movie added to watchlist' },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: 'maybe userid and Movie id are different' },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { message: 'Session Expired, Login Again' },
        { status: 404 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);

    if (userID) {
      const reqBody = await request.json();

      const MovieID = reqBody._id;
      const user = await User.findOne({ _id: userID });
      const movie = await Movie.findOne({ _id: MovieID });

      if (user && movie) {
        const index = user.watchlist.indexOf(MovieID);
        if (index > -1) {
          user.watchlist.splice(index, 1);
          await user.save();
          return NextResponse.json(
            { message: 'Movie removed from watchlist' },
            { status: 200 }
          );
        } else {
          return NextResponse.json(
            { message: 'Movie not found in watchlist' },
            { status: 404 }
          );
        }
      } else {
        return NextResponse.json(
          { message: 'User ID and/or Movie ID are incorrect' },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { message: 'Session Expired, Login Again' },
        { status: 404 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
