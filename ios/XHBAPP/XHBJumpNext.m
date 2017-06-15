//
//  XHBJumpNext.m
//  XHBAPP
//
//  Created by zhudong on 2017/6/6.
//  Copyright © 2017年 zhudong. All rights reserved.
//

#import "XHBJumpNext.h"
#import "RCTConvert.h"
#import "XHBSecondViewController.h"

@implementation XHBJumpNext

RCT_EXPORT_MODULE(XHBJumpNext);

RCT_EXPORT_METHOD(JumpNext:(NSString *)viewController dict:(NSDictionary *) dict){

    __block NSDictionary *dict1 = dict;
    dispatch_async(dispatch_get_main_queue(), ^{
        UINavigationController *nav = (UINavigationController *)[UIApplication sharedApplication].keyWindow.rootViewController;
        Class vCClass = NSClassFromString(viewController);
        UIViewController *vC;
        if (vCClass) {
            vC = [[vCClass alloc] init];
            XHBSecondViewController *secondVC = (XHBSecondViewController *)vC;
            secondVC.dict = dict1;
        }else{
            vC = [[UIViewController alloc] init];
            vC.view.backgroundColor = [UIColor redColor];
        }
        [nav pushViewController:vC animated:true];
    });
    
}

@end
