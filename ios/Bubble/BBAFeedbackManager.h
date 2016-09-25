//
//  BBAFeedbackManager.h
//  Bubble
//
//  Created by llun on 25/9/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "RCTBridgeModule.h"

@interface BBAFeedbackManager : NSObject <RCTBridgeModule>
{
  UIImpactFeedbackGenerator *impactFeedback;
  UISelectionFeedbackGenerator *selectorFeedback;
  UINotificationFeedbackGenerator *notificationFeedback;
}

@end
