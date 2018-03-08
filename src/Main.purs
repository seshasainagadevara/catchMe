module Main where

import Control.Monad.Eff
import Control.Monad.Eff.Random
import Data.Maybe
import Data.Show
import FRP.Behavior.Keyboard
import FRP.Event
import Prelude
import PrestoDOM.Core
import PrestoDOM.Elements
import PrestoDOM.Events
import PrestoDOM.Properties
import PrestoDOM.Types

import Control.Monad.Eff (kind Effect)
import Control.Monad.Eff.Console (CONSOLE, log, logShow)
import Control.Monad.Eff.Random (RANDOM)
import Control.Plus ((<|>))
import DOM (DOM)
import Data.Lens ((^.))
import Data.String (length)
import FRP (FRP)
import FRP.Behavior (Behavior, sample_)
import FRP.Event.Keyboard (down)
import FRP.Event.Time (animationFrame, interval)
import PrestoDOM.Util (logNode, render, updateState)

foreign import getRand :: Int -> Int -> Int


type Action =
  {
    clicked :: Dynamic Boolean
  }

type State =
  {
    left :: Int
  , top :: Int
  , right :: Int
  , bottom :: Int
  , time ::Int
  , text :: String
  , score :: Int
  }


main :: forall eff. Eff ( console :: CONSOLE, frp :: FRP, dom :: DOM|eff ) Unit
main = do
    let initialState = { left : 1 , top :10, right : 0 , bottom : 0 , time : 1, text : " Catch Me ", score : 0 }

    clicked <- mkDyn false
    { stateBeh, updateState } <- render (view { clicked }) initialState
    (updateState (validate true  1 <$> stateBeh) (clicked ^. ev*> pure unit))*> pure unit
    (updateState (validate false  0 <$> stateBeh) ((interval 940)*> pure unit))*> pure unit
    where validate stop val prevState = do
              let marks = prevState.score
              if (stop && val==1  ) then prevState { left = 2 , top = 0 , right = 0, bottom = 0, time =prevState.time  , text = "gotcha !!", score = marks+1}
                   else
                      if(prevState.time /= 40 && prevState.left /= 0 ) then do
                            let count =  prevState.time

                            let left = (getRand 0 1200)
                            let top = (getRand 3 70)
                            let right = (getRand 0 1)
                            let bottom = (getRand 0 1)
                            prevState { left = left , top = top , right = right, bottom = bottom, time =  count+1 , text="Catch Me!"  }
                            else if prevState.score > 0
                                   then   prevState { left = 0 , top = 0 , right = 0, bottom = 0, time =  0, text="Another trail? reload" }
                                   else prevState { left = 0 , top = 0 , right = 0, bottom = 0, time =  0, text="Haha! You can't catch Me!" }


view :: forall w i. Action -> State -> PrestoDOM i w

view action state =
  relativeLayout
    [ height Match_Parent
    , width Match_Parent
    , background "#323232"
    , name "rootNode"
    ]
    [
        imageView
             [
               height Match_Parent
             , width Match_Parent
             , imageUrl "back"

             ]

       ,linearLayout
          [ height $ V 170
          , width  $ V 170
          , name "name"
          , onClick action.clicked
          ]
          [   imageView
               [
                 height $ V 165
               , width $ V 165
               , imageUrl "smil"
               , margin $ (show state.left) <> ","<> (show state.top) <> (show state.right) <> ","<> (show state.bottom)
               ]

          ]

      , linearLayout
         [ height $ V 200
         , width  $ V 500

         ]
         [
             textView
             [
               height $ V 100
             , width $ V 300
             , text $ "time:"<> (show state.time)

             , color "#ffffff"
             , textSize "50"


             ]
             ,textView
             [
               height $ V 100
             , width $ V 400
             , text $ "TimeOut:"<> "40"
             , color "#ffffff"
             , textSize "50"


             ]

             ,textView
             [
               height $ V 100
             , width $ V 400
             , text $ "Status:" <> (state.text)
             , color "#ffffff"
             , textSize "50"


             ]
              ,textView
              [
                height $ V 100
              , width $ V 400
              , text $ "Score:" <> (show state.score)
              , color "#ffffff"
              , textSize "50"


              ]
         ]


]
