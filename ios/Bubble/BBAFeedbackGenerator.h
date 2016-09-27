//
//  BBAFeedbackGenerator.h
//  Bubble
//
//  Created by llun on 27/9/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "RCTBridgeModule.h"

typedef enum FeedbackType : NSInteger {
  kImpactFeedback,
  kSelectFeedback,
  kNotifyFeedback,
} FeedbackType;

typedef enum FeedbackStyle : NSInteger {
  kStrongFeedback,
  kMediumFeedback,
  kLightFeedback,
  
  kSuccessFeedback,
  kWarningFeedback,
  kErrorFeedback,
} FeedbackStyle;

@interface BBAFeedbackGenerator : NSObject <RCTBridgeModule>
{
  NSMutableDictionary *feedbacks;
}

- (void) generate:(FeedbackType)feedback withStyle:(FeedbackStyle)style;
- (void) generateImpactFeedbackWithStyle:(FeedbackStyle)style;
- (void) generateSelectFeedback;
- (void) generateNotifyFeedbackWithStyle:(FeedbackStyle)style;

@end
